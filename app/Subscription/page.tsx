"use client"

import React from "react"
import Link from "next/link"

export default function Inscription() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body space-y-5">

          <h1 className="text-2xl font-bold text-center text-primary">
            Inscription
          </h1>

          <form className="space-y-4">
            <div>
              <label className="label">Nom</label>
              <input
                type="text"
                placeholder="Votre nom"
                className="input input-bordered w-full"
                required
              />
            </div>

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

            <div>
              <label className="label">Confirmer mot de passe</label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                required
              />
            </div>

            <button className="btn btn-primary w-full">
              S’inscrire
            </button>
          </form>

          <p className="text-sm text-center">
            Déjà un compte ?
            <Link href="/connexion" className="link link-primary ml-1">
              Se connecter
            </Link>
          </p>

        </div>
      </div>
    </div>
  )
}
