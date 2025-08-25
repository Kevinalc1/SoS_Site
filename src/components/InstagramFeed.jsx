import React from 'react';

/*
import React, { useState, useEffect } from 'react';
import { Instagram, ExternalLink, Loader2 } from 'lucide-react';

const InstagramFeed = () => {
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Você precisará obter um token de acesso do Instagram
  // Siga as instruções em https://developers.facebook.com/docs/instagram-basic-display-api/getting-started
  const accessToken = '540cbd24b04ea9127789afec2c988e25'; // Substitua pelo seu token real da API do Instagram
  const count = 8; // Número de posts a serem exibidos

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      if (!accessToken) {
        setLoading(false);
        setError('Token de acesso do Instagram não configurado');
        return null;
      }

      try {
        // Primeiro, buscar os IDs de mídia do usuário
        const userMediaResponse = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${accessToken}&limit=${count}`
        );
        
        if (!userMediaResponse.ok) {
          throw new Error('Falha ao buscar dados do Instagram');
        }

        const userMediaData = await userMediaResponse.json();
        
        // Transformar os dados para o formato que precisamos
        const formattedPosts = userMediaData.data.map(post => ({
          id: post.id,
          image: post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url,
          caption: post.caption || '',
          permalink: post.permalink,
          date: formatDate(post.timestamp),
          mediaType: post.media_type
        }));

        setInstagramPosts(formattedPosts);
        setLoading(false);
      } catch (err) {
        console.error('Erro ao buscar posts do Instagram:', err);
        setError('Não foi possível carregar os posts do Instagram');
        setLoading(false);
      }
    };

    // Função auxiliar para formatar a data
    const formatDate = (timestamp) => {
      const date = new Date(timestamp);
      const now = new Date();
      const diffTime = Math.abs(now - date);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === 0) {
        return 'Hoje';
      } else if (diffDays === 1) {
        return 'Ontem';
      } else if (diffDays < 7) {
        return `${diffDays} dias atrás`;
      } else if (diffDays < 30) {
        const weeks = Math.floor(diffDays / 7);
        return `${weeks} ${weeks === 1 ? 'semana' : 'semanas'} atrás`;
      } else {
        const months = Math.floor(diffDays / 30);
        return `${months} ${months === 1 ? 'mês' : 'meses'} atrás`;
      }
    };

    fetchInstagramPosts();
  }, [accessToken, count]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Instagram className="text-primary" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Instagram <span className="text-primary">Feed</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acompanhe nossas atividades diárias e fique por dentro de todas as ações do SOS Tudo pelo Social.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {loading ? (
          <div className="col-span-full flex justify-center items-center py-12">
            <Loader2 className="animate-spin text-primary" size={48} />
            <span className="ml-3 text-gray-600">Carregando posts do Instagram...</span>
          </div>
        ) : error ? (
          <div className="col-span-full bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-600 mb-2">{error}</p>
            <p className="text-gray-600">Verifique se você configurou corretamente o token de acesso do Instagram.</p>
          </div>
        ) : instagramPosts.length === 0 ? (
          <div className="col-span-full bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
            <p className="text-yellow-600 mb-2">Nenhum post encontrado</p>
            <p className="text-gray-600">Verifique se sua conta do Instagram possui posts públicos.</p>
          </div>
        ) : (
          instagramPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={`Post ${post.id}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-3 right-3">
                  <Instagram className="text-white drop-shadow-lg" size={24} />
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-gray-700 text-sm mb-3 line-clamp-3">
                  {post.caption}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <a 
                    href={post.permalink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center"
                  >
                    <span>Ver no Instagram</span>
                    <ExternalLink size={12} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
            )))}
        </div>

        <div className="text-center">
          <a 
            href="https://instagram.com/SosTudopelosocial" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            <Instagram size={20} />
            <span>Seguir @SosTudopelosocial</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
*/

const InstagramFeed = () => {
  // Componente temporariamente desativado — não renderiza nada.
  return null;
};

export default InstagramFeed;
