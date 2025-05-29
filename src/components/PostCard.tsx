
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TreePine, MessageCircle, Share2, MapPin, Calendar } from 'lucide-react';

interface Post {
  id: string;
  user: {
    name: string;
    avatar: string;
    location: string;
  };
  image: string;
  description: string;
  treeType: string;
  plantedDate: string;
  likes: number;
  comments: Array<{
    id: string;
    user: string;
    text: string;
    timestamp: string;
  }>;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(post.comments);

  const handleLike = () => {
    if (isLiked) {
      setLikesCount(prev => prev - 1);
    } else {
      setLikesCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now().toString(),
        user: 'Você',
        text: newComment,
        timestamp: 'agora'
      };
      setComments(prev => [...prev, comment]);
      setNewComment('');
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto mb-6 bg-white/90 backdrop-blur-sm border-nature-200 shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={post.user.avatar} alt={post.user.name} />
            <AvatarFallback className="bg-nature-200 text-nature-700">
              {post.user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-semibold text-nature-800">{post.user.name}</h3>
            <div className="flex items-center text-sm text-sage-600 space-x-2">
              <MapPin className="w-3 h-3" />
              <span>{post.user.location}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <div className="relative">
          <img 
            src={`https://images.unsplash.com/${post.image}?auto=format&fit=crop&w=600&q=80`}
            alt={post.treeType}
            className="w-full h-80 object-cover"
          />
          <div className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 rounded-md text-xs">
            {post.treeType}
          </div>
        </div>
        
        <div className="p-4">
          <p className="text-nature-700 mb-2">{post.description}</p>
          <div className="flex items-center text-sm text-sage-600 space-x-2">
            <Calendar className="w-3 h-3" />
            <span>Plantada em {post.plantedDate}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0 pb-4 px-4 flex-col space-y-3">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`flex items-center space-x-2 ${
                isLiked 
                  ? 'text-nature-600 hover:text-nature-700' 
                  : 'text-sage-500 hover:text-nature-600'
              }`}
            >
              <TreePine className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              <span>{likesCount}</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowComments(!showComments)}
              className="flex items-center space-x-2 text-sage-500 hover:text-nature-600"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{comments.length}</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="text-sage-500 hover:text-nature-600"
            >
              <Share2 className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {showComments && (
          <div className="w-full space-y-3">
            <div className="max-h-32 overflow-y-auto space-y-2">
              {comments.map((comment) => (
                <div key={comment.id} className="text-sm">
                  <span className="font-medium text-nature-700">{comment.user}: </span>
                  <span className="text-sage-700">{comment.text}</span>
                  <span className="text-xs text-sage-500 ml-2">{comment.timestamp}</span>
                </div>
              ))}
            </div>
            
            <div className="flex space-x-2">
              <Input
                placeholder="Adicione um comentário..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleComment()}
                className="flex-1 text-sm border-sage-300 focus:border-nature-400"
              />
              <Button 
                onClick={handleComment}
                size="sm"
                className="bg-nature-500 hover:bg-nature-600 text-white"
              >
                Enviar
              </Button>
            </div>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default PostCard;
