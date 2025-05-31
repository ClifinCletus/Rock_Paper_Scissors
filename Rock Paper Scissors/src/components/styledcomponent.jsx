const createStyledComponent = (tag, styles) => {
  return ({ children, borderColor, ...props }) => {
    const Component = tag;
    let finalStyles = { ...styles };
    
    
    if (borderColor && styles.border && styles.border.includes('BORDER_COLOR')) {
      finalStyles = {
        ...styles,
        border: `8px solid ${borderColor}`
      };
    }
    
    return <Component style={finalStyles} {...props}>{children}</Component>;
  };
};

export const AppContainer = createStyledComponent('div', {
  backgroundColor: '#223a5f',
  minHeight: '100vh',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'Roboto, sans-serif'
});

export const ScoreBoard = createStyledComponent('div', {
  border: '2px solid white',
  borderRadius: '10px',
  padding: '20px 30px',
  width: '90%',
  maxWidth: '700px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '60px'
});

export const TitleContainer = createStyledComponent('div', {
  color: 'white',
  fontSize: '28px',
  fontWeight: 'bold',
  lineHeight: '32px'
});

export const TitleText = createStyledComponent('h1', {
  margin: '0',
  fontSize: '28px',
  fontWeight: 'bold'
});

export const ScoreContainer = createStyledComponent('div', {
  backgroundColor: 'white',
  padding: '15px 25px',
  borderRadius: '10px',
  textAlign: 'center',
  minWidth: '80px'
});

export const ScoreLabel = createStyledComponent('p', {
  fontWeight: '600',
  margin: '0 0 5px 0',
  color: '#223a5f',
  fontSize: '16px',
  letterSpacing: '1px'
});

export const ScoreValue = createStyledComponent('p', {
  fontSize: '48px',
  fontWeight: 'bold',
  margin: '0',
  color: '#223a5f',
  fontFamily: 'Roboto'
});

export const GameBody = createStyledComponent('div', {
  marginTop: '20px'
});

export const GameButtons = createStyledComponent('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '40px'
});

export const ButtonRow = createStyledComponent('div', {
  display: 'flex',
  gap: '60px',
  justifyContent: 'center'
});

// Special GameButton component with dynamic border color
export const GameButton = ({ children, borderColor, onMouseEnter, onMouseLeave, ...props }) => (
  <button
    style={{
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      backgroundColor: 'white',
      border: `8px solid ${borderColor || '#ccc'}`,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform 0.2s',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      outline: 'none'
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = 'scale(1.05)';
      if (onMouseEnter) onMouseEnter(e);
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = 'scale(1)';
      if (onMouseLeave) onMouseLeave(e);
    }}
    {...props}
  >
    {children}
  </button>
);

export const ResultView = createStyledComponent('div', {
  marginTop: '50px',
  textAlign: 'center',
  color: 'white'
});

export const ResultContainer = createStyledComponent('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '80px',
  marginBottom: '40px'
});

export const PlayerSection = createStyledComponent('div', {
  textAlign: 'center'
});

export const PlayerLabel = createStyledComponent('p', {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '20px',
  letterSpacing: '2px',
  color: 'white',
  margin: '0 0 20px 0'
});

export const ResultText = createStyledComponent('p', {
  fontSize: '32px',
  fontWeight: 'bold',
  margin: '20px 0',
  letterSpacing: '2px',
  color: 'white'
});

export const PlayAgainButton = createStyledComponent('button', {
  marginTop: '20px',
  backgroundColor: 'white',
  color: '#223a5f',
  border: 'none',
  padding: '12px 24px',
  borderRadius: '8px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  letterSpacing: '1px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  transition: 'background-color 0.2s',
  outline: 'none'
});

export const RulesButton = createStyledComponent('button', {
  position: 'fixed',
  bottom: '30px',
  right: '30px',
  backgroundColor: 'white',
  color: '#223a5f',
  border: 'none',
  padding: '12px 20px',
  borderRadius: '6px',
  fontSize: '14px',
  fontWeight: 'bold',
  cursor: 'pointer',
  letterSpacing: '1px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  outline: 'none'
});

export const PopupOverlay = createStyledComponent('div', {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '1000'
});

export const PopupContainer = createStyledComponent('div', {
  backgroundColor: 'white',
  padding: '30px',
  borderRadius: '15px',
  position: 'relative',
  maxWidth: '500px',
  width: '90%',
  boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
});

export const CloseButton = createStyledComponent('button', {
  position: 'absolute',
  top: '15px',
  right: '15px',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: '5px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  outline: 'none',
  color: '#666'
});

export const RulesImage = createStyledComponent('img', {
  width: '100%',
  maxWidth: '400px',
  borderRadius: '10px'
});