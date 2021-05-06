import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function LinkButton({ children, link, ...props }) {
  const history = useHistory();

  return (
    <Button
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      onClick={() => {
        history.push(link);
      }}
    >
      {children}
    </Button>
  );
}
