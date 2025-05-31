import { useState } from 'react'
import {
  AppContainer,
  ScoreBoard,
  TitleContainer,
  TitleText,
  ScoreContainer,
  ScoreLabel,
  ScoreValue,
  GameBody,
  GameButtons,
  ButtonRow,
  GameButton,
  ResultView,
  ResultContainer,
  PlayerSection,
  PlayerLabel,
  ResultText,
  PlayAgainButton,
  RulesButton,
  PopupOverlay,
  PopupContainer,
  CloseButton,
  RulesImage,
} from './styledcomponent'

// Simple Close Icon Component (replacing RiCloseLine)
const RiCloseLine = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const choicesList = [
  {
    id: 'ROCK',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    borderColor: '#0b69ff'
  },
  {
    id: 'SCISSORS',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    borderColor: '#ff0b37'
  },
  {
    id: 'PAPER',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    borderColor: '#ffae00'
  },
]

const RockPaperScissor = () => {
  const [score, setScore] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [yourChoice, setYourChoice] = useState(null)
  const [opponentChoice, setOpponentChoice] = useState(null)
  const [result, setResult] = useState('')
  const [showRules, setShowRules] = useState(false)

  const getResult = (yours, opponent) => {
    if (yours === opponent) return 'IT IS DRAW'
    if (
      (yours === 'ROCK' && opponent === 'SCISSORS') ||
      (yours === 'PAPER' && opponent === 'ROCK') ||
      (yours === 'SCISSORS' && opponent === 'PAPER')
    ) {
      return 'YOU WON'
    }
    return 'YOU LOSE'
  }

  const onClickChoice = id => {
    const yourPick = choicesList.find(each => each.id === id)
    const opponentPick = choicesList[Math.floor(Math.random() * 3)]
    const matchResult = getResult(id, opponentPick.id)

    setYourChoice(yourPick)
    setOpponentChoice(opponentPick)
    setResult(matchResult)
    setIsPlaying(false)

    if (matchResult === 'YOU WON') setScore(prev => prev + 1)
    else if (matchResult === 'YOU LOSE') setScore(prev => prev - 1)
  }

  const onClickPlayAgain = () => {
    setIsPlaying(true)
  }

  return (
    <AppContainer>
      <ScoreBoard>
        <TitleContainer>
          <TitleText>
            ROCK
            <br />
            PAPER
            <br />
            SCISSORS
          </TitleText>
        </TitleContainer>
        <ScoreContainer>
          <ScoreLabel>Score</ScoreLabel>
          <ScoreValue>{score}</ScoreValue>
        </ScoreContainer>
      </ScoreBoard>

      {isPlaying ? (
        <GameBody>
          <GameButtons>
            <ButtonRow>
              <GameButton
                borderColor={choicesList[0].borderColor}
                onClick={() => onClickChoice(choicesList[0].id)}
                data-testid={`${choicesList[0].id.toLowerCase()}Button`}
              >
                <img src={choicesList[0].imageUrl} alt={choicesList[0].id} width="80" height="80" />
              </GameButton>
              <GameButton
                borderColor={choicesList[1].borderColor}
                onClick={() => onClickChoice(choicesList[1].id)}
                data-testid={`${choicesList[1].id.toLowerCase()}Button`}
              >
                <img src={choicesList[1].imageUrl} alt={choicesList[1].id} width="80" height="80" />
              </GameButton>
            </ButtonRow>
            <GameButton
              borderColor={choicesList[2].borderColor}
              onClick={() => onClickChoice(choicesList[2].id)}
              data-testid={`${choicesList[2].id.toLowerCase()}Button`}
            >
              <img src={choicesList[2].imageUrl} alt={choicesList[2].id} width="80" height="80" />
            </GameButton>
          </GameButtons>
        </GameBody>
      ) : (
        <ResultView>
          <ResultContainer>
            <PlayerSection>
              <PlayerLabel>YOU</PlayerLabel>
              <GameButton borderColor={yourChoice.borderColor}>
                <img src={yourChoice.imageUrl} alt="your choice" width="80" height="80" />
              </GameButton>
            </PlayerSection>
            <PlayerSection>
              <PlayerLabel>OPPONENT</PlayerLabel>
              <GameButton borderColor={opponentChoice.borderColor}>
                <img src={opponentChoice.imageUrl} alt="opponent choice" width="80" height="80" />
              </GameButton>
            </PlayerSection>
          </ResultContainer>
          <ResultText>{result}</ResultText>
          <PlayAgainButton 
            onClick={onClickPlayAgain}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
          >
            PLAY AGAIN
          </PlayAgainButton>
        </ResultView>
      )}

      <RulesButton onClick={() => setShowRules(true)}>
        RULES
      </RulesButton>

      {showRules && (
        <PopupOverlay onClick={() => setShowRules(false)}>
          <PopupContainer onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setShowRules(false)} data-testid="close">
              <RiCloseLine size={20} />
            </CloseButton>
            <RulesImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </PopupContainer>
        </PopupOverlay>
      )}
    </AppContainer>
  )
}

export default RockPaperScissor