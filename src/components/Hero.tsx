import React, { useState } from 'react';

const products = [
  // J'ai mis l'espace ici car c'est ce que tu as indiqué pour la capture 7
  { id: 7, name: "Kit Kittie Glow", price: "12.500", img: "/capture 7.jpg", status: "Top Vente", rating: "5.0", reviews: "Très apprécié" },
  // Pas d'espace pour les suivants selon ta liste
  { id: 8, name: "Box Complet Sérénité", price: "25.000", img: "/capture8.jpg", status: "Populaire", rating: "4.9", reviews: "Coup de cœur" },
  { id: 9, name: "Pack Accessoires Chic", price: "8.500", img: "/capture9.jpg", status: "Stock Limité", rating: "4.8", reviews: "Recommandé" },
  { id: 10, name: "Kit Makeup Starter", price: "15.000", img: "/capture10.jpg", status: "Meilleur Prix", rating: "4.7", reviews: "Indispensable" },
  { id: 11, name: "Box Surprise Deluxe", price: "22.000", img: "/capture11.jpg", status: "Top Vente", rating: "5.0", reviews: "Édition Limitée" },
  { id: 12, name: "Kit Pinceaux Pro", price: "7.500", img: "/capture12.jpg" },
  { id: 13, name: "Mini Box Voyage", price: "4.500", img: "/capture13.jpg" },
  { id: 14, name: "Set Skincare Bio", price: "18.000", img: "/capture14.jpg" },
  { id: 15, name: "Kit Ongles Express", price: "6.500", img: "/capture15.jpg" },
  { id: 16, name: "Box Coiffure Zen", price: "13.500", img: "/capture16.jpg" },
  { id: 17, name: "Accessoires Dorés Set", price: "3.500", img: "/capture17.jpg" },
  { id: 18, name: "Kit Nettoyage Peau", price: "9.000", img: "/capture18.jpg" },
  { id: 19, name: "Box Beauté Éclat", price: "21.000", img: "/capture19.jpg" },
  { id: 20, name: "Pack Routine Soir", price: "11.000", img: "/capture20.jpg" },
  { id: 21, name: "Kit Kittie Summer", price: "5.500", img: "/capture21.jpg" },
  { id: 22, name: "Box Détente Totale", price: "19.500", img: "/capture22.jpg" },
  { id: 23, name: "Pack Accessoires Premium", price: "16.500", img: "/capture23.jpg" },
];

const WHATSAPP_NUMBER = "22656265854";

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FFF0F5] text-[#1D1D1F] font-sans pb-20">
      
      {/* BLOC CONFIANCE */}
      <div className="bg-black text-white py-2.5 px-4 sticky top-0 z-[60]">
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-4 md:gap-8 text-[9px] font-bold uppercase tracking-[0.2em] text-center">
          <span>🔥 Boutique Fiable</span>
          <span className="w-1 h-1 bg-white/30 rounded-full"></span>
          <span>🚚 Livraison Rapide</span>
          <span className="w-1 h-1 bg-white/30 rounded-full"></span>
          <span>💬 Commande WhatsApp</span>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-[38px] z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
             <img src="/MAVA.jpeg" alt="Logo" className="w-12 h-12 rounded-2xl object-contain border border-gray-100 shadow-sm" />
             <div className="flex flex-col">
                <h1 className="text-xl font-black tracking-tighter leading-none italic uppercase">Lipgloss Beauty</h1>
                <span className="text-[10px] font-bold text-gray-400 tracking-[0.3em] uppercase">Boutique Accessoires</span>
             </div>
          </div>

          <div className="relative group w-full md:w-80">
            <input 
              type="text" 
              placeholder="Chercher un kit..." 
              className="w-full bg-white/50 border-2 border-transparent rounded-2xl py-3 px-6 text-sm focus:bg-white focus:border-black transition-all outline-none shadow-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* CATALOGUE */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-24">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group flex flex-col items-center">
              
              {/* CADRE DORÉ + OMBRE NOIRE */}
              <div className="relative w-full aspect-[4/5] rounded-[40px] p-[2.5px] bg-gradient-to-tr from-[#D4AF37] via-[#F9E498] to-[#C5A028] shadow-[0_40px_70px_-20px_rgba(0,0,0,0.6)] transition-all duration-500 group-hover:shadow-[0_50px_90px_-20px_rgba(0,0,0,0.8)] group-hover:-translate-y-3">
                <div className="bg-white w-full h-full rounded-[37.5px] overflow-hidden">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x500?text=Vérifier+Nom+Fichier'; }}
                  />
                </div>
                
                {product.status && (
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                     <span className="text-[9px] font-black uppercase tracking-widest text-black">{product.status}</span>
                  </div>
                )}
              </div>

              {/* INFOS PRODUIT */}
              <div className="mt-8 flex flex-col items-center text-center w-full px-4">
                {product.rating ? (
                  <div className="flex items-center gap-1.5 mb-2">
                    <svg className="w-3.5 h-3.5 fill-[#D4AF37]" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <span className="text-[11px] font-bold text-gray-900">{product.rating}</span>
                    <span className="text-[11px] font-medium text-gray-400">| {product.reviews}</span>
                  </div>
                ) : (
                  <div className="h-[21px] mb-2"></div>
                )}
                
                <h3 className="text-2xl font-black tracking-tighter uppercase mb-1">{product.name}</h3>
                <p className="text-3xl font-light text-black mb-8">{product.price} <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">FCFA</span></p>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour, je souhaite commander le ${encodeURIComponent(product.name)}. Est-il disponible ?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white py-4.5 rounded-[22px] font-bold text-lg flex items-center justify-center gap-3 shadow-[0_15px_30px_-5px_rgba(37,211,102,0.4)] hover:brightness-110 transition-all hover:scale-[1.02] active:scale-95 px-8"
                >
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.736 1.482h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Commander
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="fixed bottom-6 right-6 z-50">
        <div className="bg-black text-white px-5 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10 uppercase italic">
          <span className="text-[10px] font-bold opacity-50 tracking-[0.3em]">Par</span>
          <span className="text-xs font-black border-l border-white/20 pl-3">CATALOGA</span>
        </div>
      </footer>
    </div>
  );
}