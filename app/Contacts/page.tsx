"use client"

import React from "react"

export default function Contact() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card w-full max-w-4xl bg-base-100 shadow-2xl">
        <div className="card-body space-y-8">

          <h1 className="text-3xl font-bold text-center text-primary">
            Contactez-nous
          </h1>

          <p className="text-center text-gray-600 text-sm">
            N’hésitez pas à nous contacter pour toute information ou collaboration.
          </p>

          <div className="divider"></div>

          {/* Infos + Formulaire */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Coordonnées */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-secondary">
                Nos coordonnées
              </h2>

              <div className="flex items-center gap-3">
                <span className="badge badge-primary">Email</span>
                <p className="text-sm">contact@2ie-platforme.com</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="badge badge-secondary">Téléphone</span>
                <p className="text-sm">+226 70 00 00 00</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="badge badge-accent">Adresse</span>
                <p className="text-sm">
                  Institut 2iE, Ouagadougou, Burkina Faso
                </p>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                Nous sommes disponibles du lundi au vendredi, de 8h à 17h.
              </p>
            </div>

            {/* Formulaire */}
            <form className="space-y-4">
              <div>
                <label className="label">
                  <span className="label-text">Nom</span>
                </label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="exemple@email.com"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered w-full"
                  rows="4"
                  placeholder="Votre message..."
                  required
                ></textarea>
              </div>

              <button className="btn btn-primary w-full">
                Envoyer le message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
