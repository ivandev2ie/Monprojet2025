

"use client"

import React from "react"
import Link from "next/link"

export default function Connexion() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body space-y-5">

          <h1 className="text-2xl font-bold text-center text-primary">
            Connexion
          </h1>

          <form className="space-y-4">
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                placeholder="exemple@email.com"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">Mot de passe</label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                required
              />
            </div>

            <button className="btn btn-primary w-full">
              Se connecter
            </button>
          </form>

          <p className="text-sm text-center">
            Pas encore de compte ?
            <Link href="/inscription" className="link link-primary ml-1">
              S’inscrire
            </Link>
          </p>

        </div>
      </div>
    </div>
  )
}
