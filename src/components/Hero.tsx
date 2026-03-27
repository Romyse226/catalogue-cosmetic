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
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopyLink = (productId: number, productName: string) => {
    // Construction de l'URL propre pour Vercel
    const baseUrl = window.location.origin;
    const shareUrl = `${baseUrl}?p=${productId}&t=${Date.now()}`; // Le timestamp force l'aperçu image sur certains réseaux
    
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopiedId(productId);
      setTimeout(() => setCopiedId(null), 2000); // Reset l'icône après 2s
    });
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FFF0F5] text-[#1D1D1F] font-sans">
      
      {/* BARRE DE CONFIANCE */}
      <div className="bg-black text-white py-2.5 px-4 sticky top-0 z-[60]">
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-4 text-[9px] font-bold uppercase tracking-[0.2em] text-center">
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
             <img src="/capture47.jpg" alt="Logo ABC" className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-lg" />
             <div className="flex flex-col">
                <h1 className="text-2xl font-black tracking-tighter leading-none italic uppercase">{BUSINESS_NAME}</h1>
                <span className="text-[10px] font-bold text-gray-400 tracking-[0.3em] uppercase">Beauté & Soins Cosmétiques</span>
             </div>
          </div>
          <input 
            type="text" 
            placeholder="Rechercher une pommade..." 
            className="w-full md:w-96 bg-gray-50 border-2 border-transparent rounded-2xl py-3 px-6 text-sm focus:bg-white focus:border-black transition-all outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-10 pb-24">
        {/* COVER */}
        <div className="relative w-full aspect-[21/9] rounded-[40px] overflow-hidden mb-20 shadow-2xl border-4 border-white">
          <img src="/capture24.jpg" alt="Cover ABC" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-10">
            <h2 className="text-white text-5xl md:text-7xl font-black italic uppercase mb-4">Révélez votre Éclat</h2>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-28">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group flex flex-col items-center">
              
              <div className="relative w-full aspect-[4/5] rounded-[40px] p-[3px] bg-gradient-to-tr from-[#D4AF37] via-[#F9E498] to-[#C5A028] shadow-[0_45px_80px_-25px_rgba(0,0,0,0.65)] transition-all">
                <div className="bg-white w-full h-full rounded-[37px] overflow-hidden relative">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="mt-10 flex flex-col items-center text-center w-full px-4">
                <h3 className="text-2xl font-black uppercase mb-2 leading-tight">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-6 max-w-sm">{product.description}</p>
                <p className="text-4xl font-light text-black mb-10">{product.price} <span className="text-xs font-bold opacity-40">FCFA</span></p>

                <div className="flex w-full gap-3">
                  {/* BOUTON WHATSAPP */}
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour ${BUSINESS_NAME}, je souhaite commander : ${encodeURIComponent(product.name)} (${product.price} FCFA). Voici le lien : ${encodeURIComponent(window.location.origin + '?p=' + product.id)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-[4] bg-[#25D366] text-white py-5 rounded-[24px] font-bold text-lg flex items-center justify-center gap-3 shadow-[0_15px_30px_-5px_rgba(37,211,102,0.4)]"
                  >
                    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.736 1.482h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Commander
                  </a>
                  
                  {/* BOUTON COPIER */}
                  <button 
                    onClick={() => handleCopyLink(product.id, product.name)}
                    className={`flex-1 rounded-[24px] flex items-center justify-center transition-all border-2 ${copiedId === product.id ? 'bg-black border-black text-white' : 'bg-white border-gray-200 text-black'}`}
                  >
                    {copiedId === product.id ? (
                      <span className="text-[10px] font-bold uppercase">Copié !</span>
                    ) : (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="fixed bottom-6 right-6 z-50">
        <div className="bg-black text-white px-5 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10 uppercase italic">
          <span className="text-[10px] font-bold opacity-50 tracking-[0.3em]">Showroom</span>
          <span className="text-xs font-black border-l border-white/20 pl-3 uppercase">{BUSINESS_NAME}</span>
        </div>
      </footer>
    </div>
  );
}