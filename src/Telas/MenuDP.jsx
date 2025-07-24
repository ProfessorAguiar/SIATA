import { FaWhatsapp, FaPhone, FaTelegram, FaBackward } from 'react-icons/fa';

export default function MenuDP() {
    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <h1 style={styles.heading}>Departamento Pessoal</h1>

                <div style={styles.buttonRow}>
                    {/* Botão WhatsApp */}
                    <a
                        href="https://wa.me/5521992890915"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ ...styles.button, ...styles.whatsapp }}
                    >
                        <FaWhatsapp style={styles.icon} />
                        WhatsApp
                    </a>
                    <a
                        href="https://t.me/Mileumbot"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ ...styles.button, ...styles.telegram }}
                    >
                        <FaTelegram style={styles.icon} />
                        Telegram
                    </a>

                    {/* Botão Telefone */}
                    <a
                        href="tel:+5521983952643"
                        style={{ ...styles.button, ...styles.telefone }}
                    >
                        <FaPhone style={styles.icon} />
                        Ligar para o DP
                    </a>
                </div>
                <p style={{ marginTop: '20px', textAlign: 'center' }}>
                    Entre em contato com o Departamento Pessoal para dúvidas, solicitações ou informações sobre benefícios e  procedimentos.
                </p>
            </div>
            <button style={styles.voltar} onClick={() => window.location.href = '/Menu'}>
                <FaBackward style={styles.iconVoltar} />
            </button>
        </div>
    );
};

const styles = {
    page: {
        // background: '#f4f4f4',
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: '400px',
    },
    heading: {
        color: '#333',
        fontSize: '26px',
        marginBottom: '30px',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonRow: {
        display: 'flex',
        gap: '30px',
    },
    button: {
        width: '220px',
        padding: '18px',
        fontSize: '18px',
        textAlign: 'center',
        textDecoration: 'none',
        color: 'white',
        borderRadius: '10px',
        transition: 'background 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
    },
    whatsapp: {
        backgroundColor: '#25D366',
    },
    telegram: {
        backgroundColor: '#0088cc',
    },
    telefone: {
        backgroundColor: '#007BFF',
    },
    icon: {
        fontSize: '22px',
    },
    voltar: {
        width: '50px',
        height: '50px',
        position: 'fixed',
        top: '20px', 
        left: '20px',
        borderRadius: '25px',
    },
    iconVoltar: {
        fontSize: '44px',
        width: '100%',
        height: '100%',
        color: '#333',
    },
};

