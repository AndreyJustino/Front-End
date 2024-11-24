import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import promptGemini from '../../middleware/gemini.js';
import logo from '../../assets/img/onflylogo.jpeg'

export default function RecipeReviewCard() {
  const [messages, setMessages] = React.useState([]);
  const [userMessage, setUserMessage] = React.useState('');

  const handleSendMessage = async () => {
    if (userMessage.trim()) {

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: userMessage, sender: 'user' },
      ]);

      setUserMessage('');

      try {
        const response = await promptGemini(userMessage); 
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: response, sender: 'bot' },
        ]);
      } catch (error) {
        console.error('Erro ao obter resposta do modelo:', error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Desculpe, ocorreu um erro ao processar sua mensagem.', sender: 'bot' },
        ]);
      }
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
<CardHeader
  avatar={<img src={logo} alt="OnFly Logo" style={{ width: 40, height: 40, borderRadius: '50%' }} />}
  action={
    <IconButton aria-label="settings">
      <MoreVertIcon />
    </IconButton>
  }
  title="OnFly Chat"
  subheader="Bem-vindo ao chatOnfly!"
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
