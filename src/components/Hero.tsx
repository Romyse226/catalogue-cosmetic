import React, { useState } from 'react';

const products = Array.from({ length: 23 }, (_, i) => {
  const id = i + 24;
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
  const name = isGamme ? `${cosme.type} ABC` : `Kit ${cosme.type} ${id}`;
  const price = isGamme ? "35.000" : (Math.floor(Math.random() * (18 - 4 + 1)) + 4) + ".500";

  return { id, name, price, img: `/capture${id}.jpg`, description: cosme.desc };
});

const WHATSAPP_NUMBER = "22507879292";
const BUSINESS_NAME = "American Beauty Center";

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("");

  const copyToClipboard = (productName: string) => {
    const url = window.location.href.split('?')[0]; // URL de base de ton Vercel
    const shareText = `${url}?product=${encodeURIComponent(productName)}`;
    
    navigator.clipboard.writeText(shareText).then(() => {
      alert("Lien du produit copié !");
    }).catch(err => {
      console.error('Erreur lors de la copie :', err);
    });
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FFF0F5] text-[#1D1D1F] font-sans">
      
      <div className="bg-black text-white py-2.5 px-4 sticky top-0 z-[60]">
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-4 md:gap-8 text-[9px] font-bold uppercase tracking-[0.2em] text-center text-white">
          <span>🔥 Produits Cosmétiques Certifiés</span>
          <span className="w-1 h-1 bg-white/30 rounded-full"></span>
          <span>🚚 Livraison partout Abidjan</span>
          <span className="w-1 h-1 bg-white/30 rounded-full"></span>
          <span>💬 Commande WhatsApp Simple</span>
        </div>
      </div>

      <header className="sticky top-[38px] z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
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
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-10 pb-24">
        
        <div className="relative w-full aspect-[21/9] rounded-[40px] overflow-hidden mb-20 shadow-2xl border-4 border-white group">
          <img src="/capture24.jpg" alt="Cover" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-10 md:p-16">
            <span className="text-white text-xs font-bold uppercase tracking-[0.4em] mb-2">Collection Signature</span>
            <h2 className="text-white text-5xl md:text-7xl font-black tracking-tightest leading-tight uppercase italic mb-4">Révélez votre Éclat Naturel</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-28">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group flex flex-col items-center">
              
              <div className="relative w-full aspect-[4/5] rounded-[40px] p-[3px] bg-gradient-to-tr from-[#D4AF37] via-[#F9E498] to-[#C5A028] shadow-[0_45px_80px_-25px_rgba(0,0,0,0.65)] transition-all duration-500 group-hover:shadow-[0_55px_100px_-25px_rgba(0,0,0,0.85)] group-hover:-translate-y-4">
                <div className="bg-white w-full h-full rounded-[37px] overflow-hidden relative">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x500?text=Vérifier+Image'; }}
                  />
                </div>
              </div>

              <div className="mt-10 flex flex-col items-center text-center w-full px-4">
                <h3 className="text-2xl font-black tracking-tighter uppercase mb-2 leading-tight">{product.name}</h3>
                <p className="text-gray-600 text-sm font-light mb-6 leading-relaxed max-w-sm">{product.description}</p>
                <p className="text-4xl font-light text-black mb-10 tracking-tighter">{product.price} <span className="text-xs font-bold opacity-40 uppercase">FCFA</span></p>

                <div className="flex w-full gap-2">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour, je souhaite commander la ${encodeURIComponent(product.name)} (${product.price} FCFA) vu sur ${encodeURIComponent(window.location.href + '?p=' + product.id)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-[4] bg-[#25D366] text-white py-5 rounded-[24px] font-bold text-lg flex items-center justify-center gap-3 shadow-[0_15px_30px_-5px_rgba(37,211,102,0.4)] hover:brightness-105 transition-all"
                  >
                    Commander
                  </a>
                  
                  {/* BOUTON COPIER LIEN */}
                  <button 
                    onClick={() => copyToClipboard(product.name)}
                    className="flex-[1] bg-white border-2 border-gray-200 text-black rounded-[24px] flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
                    title="Copier le lien"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="fixed bottom-6 right-6 z-50">
        <div className="bg-black/95 text-white px-5 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10 uppercase italic">
          <span className="text-[10px] font-bold tracking-widest opacity-50 uppercase tracking-[0.3em]">Showroom</span>
          <span className="text-xs font-black border-l border-white/20 pl-3 uppercase">{BUSINESS_NAME}</span>
        </div>
      </footer>
    </div>
  );
}