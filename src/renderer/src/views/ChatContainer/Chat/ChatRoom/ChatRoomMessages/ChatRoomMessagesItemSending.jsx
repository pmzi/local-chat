import PropTypes from 'prop-types';

export default function ChatRoomMessagesItemSending({ message }) {
  return (
    <div className="min-h-16 bg-primary w-80 flex items-center p-4 rounded-xl mb-8 last:mb-0 self-end">
      { message }
    </div>
  );
}

ChatRoomMessagesItemSending.propTypes = {
  message: PropTypes.string.isRequired,
};
