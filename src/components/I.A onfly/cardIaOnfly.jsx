import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';

export default function RecipeReviewCard() {
  const [messages, setMessages] = React.useState([]);
  const [userMessage, setUserMessage] = React.useState('');

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: userMessage, sender: 'user' },
      ]);
      setUserMessage(''); 

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Olá, como posso ajudar?', sender: 'bot' },
          { text: 'Sou uma I.A da onfly feita para te ajudar', sender: 'bot' },
          { text: 'Qual é sua duvida?', sender: 'bot' },
        ]);
      }, 1000);
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#0597FA' }} aria-label="recipe">
            I.A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="OnFly Chat"
        subheader="Bem-vindo ao chat!"
      />

      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 2 }}>
          Fale comigo! Eu sou a inteligência artificial da Onfly.
        </Typography>

        <div style={{ maxHeight: 300, overflowY: 'auto', marginBottom: 10 }}>
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                textAlign: msg.sender === 'user' ? 'right' : 'left',
                marginBottom: 10,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  display: 'inline-block',
                  backgroundColor: msg.sender === 'user' ? '#0597FA' : '#f0f0f0',
                  color: msg.sender === 'user' ? '#fff' : '#000',
                  padding: '8px 12px',
                  borderRadius: '10px',
                  maxWidth: '70%',
                }}
              >
                {msg.text}
              </Typography>
            </div>
          ))}
        </div>


        <TextField
          label="Digite sua mensagem"
          variant="outlined"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
        />

        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          Enviar
        </Button>
      </CardContent>
    </Card>
  );
}
