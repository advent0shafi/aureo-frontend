"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"
import BACKEND_BASE_URL from "../lib/Api"

interface User {
  id: number
  username: string
  email: string
  first_name: string
  last_name: string
}

interface AuthContextType {
  user: User | null
  login: (username: string, password: string) => Promise<void>
  logout: () => void
  register: (
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    confirmPassword: string
  ) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const initializeAuth = async () => {
      const accessToken = localStorage.getItem("access_token")
      if (accessToken) {
        try {
          const userResponse = await fetch(`${BACKEND_BASE_URL}/auth/user/`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          
          if (userResponse.ok) {
            const userData = await userResponse.json()
            setUser(userData)
            localStorage.setItem("user", JSON.stringify(userData))
          } else {
            logout()
          }
        } catch (error) {
          console.error("Error initializing auth:", error)
          logout()
        }
      }
    }
    
    initializeAuth()
  }, [])

  const login = async (username: string, password: string) => {
    const response = await fetch(`${BACKEND_BASE_URL}/auth/login/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.detail || "Login failed")
    }

    const { access, refresh } = await response.json()
    localStorage.setItem("access_token", access)
    localStorage.setItem("refresh_token", refresh)

    const userResponse = await fetch(`${BACKEND_BASE_URL}/auth/user/`, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    })

    const userData = await userResponse.json()
    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    localStorage.removeItem("user")
  }

  const register = async (
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    confirmPassword: string
  ) => {
    const response = await fetch(`${BACKEND_BASE_URL}/auth/register/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        first_name: firstName,
        last_name: lastName,
        password,
        confirm_password: confirmPassword,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(Object.values(errorData).join(" ") || "Registration failed")
    }
  }

  return <AuthContext.Provider value={{ user, login, logout, register }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}