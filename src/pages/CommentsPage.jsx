import { useParams } from 'react-router-dom';

const CommentsPage = () => {
  const { productId } = useParams();
  return <div>CommentPage: {productId} </div>;
};

export default CommentsPage;
