"use client"

import React from "react"

export default function Apropos() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card max-w-3xl bg-base-100 shadow-2xl">
        <div className="card-body space-y-6">
          
          <h1 className="text-3xl font-bold text-center text-primary">
            À propos de nous
          </h1>

          <p className="text-center text-gray-600">
            Une plateforme dédiée à l’innovation, à la formation et au partage
            des connaissances numériques.
          </p>

          <div className="divider"></div>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* Image */}
            <img
              src="https://img.daisyui.com/images/stock/photo-1500530855697-b586d89ba3ee.webp"
              alt="À propos"
              className="rounded-xl shadow-md"
            />

            {/* Texte */}
            <div className="space-y-3">
              <h2 className="text-xl font-semibold">
                Notre mission
              </h2>
              <p className="text-sm leading-relaxed text-gray-700">
                Nous accompagnons les étudiants et professionnels dans le
                développement de compétences techniques et numériques adaptées
                aux défis actuels et futurs.
              </p>

              <button className="btn btn-primary btn-sm mt-2">
                En savoir plus
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
