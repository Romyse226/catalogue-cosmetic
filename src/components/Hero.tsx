import React, { useState } from 'react';

// 1. GÉNÉRATION DYNAMIQUE DES DONNÉES COSMÉTIQUES (capture24 à capture46)
const products = Array.from({ length: 23 }, (_, i) => {
  const id = i + 24;
  
  // Tableau de types de produits pour varier les noms et descriptions
  const cosmeTypes = [
    { type: "Lait Corporel", desc: "Hydratation intense 24h, enrichi au beurre de karité pour une peau douce." },
    { type: "Crème Visage Juvénile", desc: "Soin anti-âge éclat, lisse les ridules et illumine le teint." },
    { type: "Sérum Réparateur", desc: "Concentré en vitamine C pour unifier le teint et corriger les imperfections." },
    { type: "Gamme Complète Éclat", desc: "Rituel complet (Savon, Lait, Crème, Sérum) pour une transformation visible." },
    { type: "Pommade Éclaircissante Bébé", desc: "Soin doux et hydratant, unifie délicatement le teint des tout-petits." },
    { type: "Gommage Corps Gourmand", desc: "Exfolie en douceur et affine le grain de peau pour un toucher satiné." },
    { type: "Huile de Beauté Prestigieuse", desc: "Nourrit intensément le corps, le visage et les cheveux." },
    { type: "Gamme Hydra-Suprême", desc: "Collection complète pour peaux très sèches, confort absolu." }
  ];

  const cosme = cosmeTypes[i % cosmeTypes.length];
  const isGamme = cosme.type.includes("Gamme");

  // Noms de produits cosmétiques (Kit/Box + Type)
  const name = isGamme ? `${cosme.type} ABC` : `Kit ${cosme.type} ${id}`;
  
  // Prix variant entre 4.500F (pommade simple) et 35.000F (gamme complète)
  const price = isGamme ? "35.000" : (Math.floor(Math.random() * (18 - 4 + 1)) + 4) + ".500";

  let status = null;
  let rating = null;
  let reviews = null;

  // Personnalisation des 5 premiers (id 24 à 28) selon ta stratégie
  if (id === 24) { status = "Top Vente"; rating = "5.0"; reviews = "Très apprécié"; }
  if (id === 25) { status = "Coup de cœur"; rating = "4.9"; reviews = "Top Feedback"; }
  if (id === 26) { status = "Recommandé"; rating = "4.8"; reviews = "Best Seller"; }
  if (id === 27) { status = "Nouveau"; rating = "5.0"; reviews = "Favori ABC"; }
  if (id === 28) { status = "Stock Limité"; rating = "4.7"; reviews = "Prestige"; }

  return { id, name, price, img: `/capture${id}.jpg`, description: cosme.desc, status, rating, reviews };
});

const WHATSAPP_NUMBER = "22507879292";
const BUSINESS_NAME = "American Beauty Center";

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FFF0F5] text-[#1D1D1F] font-sans">
      
      {/* BLOC CONFIANCE (sticky) */}
      <div className="bg-black text-white py-2.5 px-4 sticky top-0 z-[60]">
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-4 md:gap-8 text-[9px] font-bold uppercase tracking-[0.2em] text-center text-white">
          <span>🔥 Produits Cosmétiques Certifiés</span>
          <span className="w-1 h-1 bg-white/30 rounded-full"></span>
          <span>🚚 Livraison partout Abidjan</span>
          <span className="w-1 h-1 bg-white/30 rounded-full"></span>
          <span>💬 Commande WhatsApp Simple</span>
        </div>
      </div>

      {/* HEADER & RECHERCHE (sticky) */}
      <header className="sticky top-[38px] z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
             {/* Logo ABC mis à jour (capture47.jpg) */}
             <img src="/capture47.jpg" alt={`${BUSINESS_NAME} Logo`} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-lg" />
             <div className="flex flex-col">
                <h1 className="text-2xl font-black tracking-tighter leading-none italic uppercase">{BUSINESS_NAME}</h1>
                <span className="text-[10px] font-bold text-gray-400 tracking-[0.3em] uppercase">Beauté & Soins Cosmétiques</span>
             </div>
          </div>

          <div className="relative group w-full md:w-96">
            <input 
              type="text" 
              placeholder="Rechercher une pommade, une gamme..." 
              className="w-full bg-gray-50 border-2 border-transparent rounded-2xl py-3 px-6 text-sm focus:bg-white focus:border-black transition-all outline-none shadow-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-4 top-3.5 text-gray-400 group-focus-within:text-black">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 pt-10 pb-24">
        
        {/* GRANDE PHOTO DE COUVERTURE (Style American Beauty) */}
        <div className="relative w-full aspect-[21/9] rounded-[40px] overflow-hidden mb-20 shadow-2xl border-4 border-white group">
          <img 
            src="/capture24.jpg" // Utilise la première photo cosmétique comme couverture
            alt={`${BUSINESS_NAME} Collection`}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-10 md:p-16">
            <span className="text-white text-xs font-bold uppercase tracking-[0.4em] mb-2">Collection Signature</span>
            <h2 className="text-white text-5xl md:text-7xl font-black tracking-tightest leading-tight uppercase italic mb-4">Révélez votre Éclat Naturel</h2>
            <p className="text-white/80 max-w-xl text-lg font-light leading-relaxed">Découvrez nos gammes cosmétiques exclusives et soins de prestige pour une peau sublîmée au quotidien.</p>
          </div>
        </div>

        {/* GRID CATALOGUE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-28">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group flex flex-col items-center">
              
              {/* CADRE DORÉ + OMBRE NOIRE PROFONDE */}
              <div className="relative w-full aspect-[4/5] rounded-[40px] p-[3px] bg-gradient-to-tr from-[#D4AF37] via-[#F9E498] to-[#C5A028] shadow-[0_45px_80px_-25px_rgba(0,0,0,0.65)] transition-all duration-500 group-hover:shadow-[0_55px_100px_-25px_rgba(0,0,0,0.85)] group-hover:-translate-y-4">
                <div className="bg-white w-full h-full rounded-[37px] overflow-hidden relative">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x500?text=Vérifier+Nom+Fichier'; }}
                  />
                  {/* Overlay dégradé doux sur l'image */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/40 group-hover:to-white/10 transition-colors"></div>
                </div>
                
                {product.status && (
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2 rounded-full shadow-lg border border-gray-100">
                     <span className="text-[10px] font-black uppercase tracking-widest text-black">{product.status}</span>
                  </div>
                )}
              </div>

              {/* INFOS PRODUIT (Avec Description) */}
              <div className="mt-10 flex flex-col items-center text-center w-full px-4">
                
                {product.rating ? (
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <svg className="w-4 h-4 fill-[#D4AF37]" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <span className="text-[12px] font-bold text-gray-950">{product.rating}</span>
                    <span className="text-[12px] font-medium text-gray-400">| {product.reviews}</span>
                  </div>
                ) : (
                  <div className="h-[26px] mb-2.5"></div>
                )}
                
                <h3 className="text-2xl font-black tracking-tighter uppercase mb-2 leading-tight">{product.name}</h3>
                
                {/* AJOUT DE LA DESCRIPTION (Cosmétique) */}
                <p className="text-gray-600 text-sm font-light mb-6 leading-relaxed max-w-sm">{product.description}</p>
                
                <p className="text-4xl font-light text-black mb-10 tracking-tighter">{product.price} <span className="text-xs font-bold tracking-widest opacity-40 uppercase">FCFA</span></p>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour, je souhaite commander la ${encodeURIComponent(product.name)} de American Beauty Center. Est-elle disponible ?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white py-5 rounded-[24px] font-bold text-lg flex items-center justify-center gap-3 shadow-[0_15px_30px_-5px_rgba(37,211,102,0.4)] hover:brightness-105 transition-all hover:scale-[1.03] active:scale-95 px-8"
                >
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.736 1.482h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Commander
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER BADGE ABC */}
      <footer className="fixed bottom-6 right-6 z-50">
        <div className="bg-black/95 text-white px-5 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10 uppercase italic">
          <span className="text-[10px] font-bold tracking-widest opacity-50 uppercase tracking-[0.3em]">Showroom</span>
          <span className="text-xs font-black border-l border-white/20 pl-3 uppercase">{BUSINESS_NAME}</span>
        </div>
      </footer>
    </div>
  );
}