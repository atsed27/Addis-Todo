import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PauseIcon from '@mui/icons-material/Pause';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { Slider, Typography } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
//song import
import yema from '../music/YEMa - Lomeye  ሎምዬ.mp3';
import aschalew from '../music/እመት_ሸዋ_አሰቻለው_ፈጠነ_አርዲ_Enatwa_Gonder_Emet_Shewa_Aschalew_ML5hDv01a.mp3';
interface MainProps {
  theme?: number;
  margin?: number;
}
const Co = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 50%;
  background-color: rgb(251, 252, 252);
  position: fixed;
  bottom: 0px;
`;

const Wrapper = styled.div``;
const BarMenu = styled.div<MainProps>`
  background-color: black;
  color: white;
  padding-top: ${(props) => props.theme}px;
  padding-bottom: ${(props) => props.theme}px;
`;
const CustomDiv = styled.div<MainProps>`
  background-color: #4c4c4c;
  margin-left: ${(props) => props.margin}px;
  margin-left: ${(props) => props.margin}px;
  padding: 7px;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
`;

const Stack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
`;
const StackN = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
`;
const AfterBox = styled.div``;
const MusicSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BottomBar: React.FC = () => {
  const audioPlayer = useRef<HTMLAudioElement | null>(null);
  const [volume, setVolume] = useState(30);
  const [index, setIndex] = useState(0);
  const [mute, setMute] = useState(false);
  const playlist = [yema, aschalew];
  const [currentSong] = useState(playlist[index]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  useEffect(() => {
    if (audioPlayer && audioPlayer.current) {
      const player = audioPlayer.current;
      player.volume = volume / 100;
    }
    if (isPlaying) {
      setInterval(() => {
        const _duration = Math.floor(audioPlayer?.current?.duration ?? 0);
        const _elapsed = Math.floor(audioPlayer?.current?.currentTime ?? 0);

        setDuration(_duration);
        setElapsed(_elapsed);
      }, 100);
    }
  }, [isPlaying, volume]);
  const togglePlay = () => {
    if (!isPlaying) {
      audioPlayer.current?.play();
    } else {
      audioPlayer.current?.pause();
    }
    setIsPlaying((prev) => !prev);
  };
  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value);
    setVolume(newVolume);
  };
  function VolumeBtns() {
    return mute ? (
      <VolumeOffIcon
        sx={{ color: 'lime', '&:hover': { color: 'white' } }}
        onClick={() => setMute(!mute)}
      />
    ) : volume <= 20 ? (
      <VolumeMuteIcon
        sx={{ color: 'lime', '&:hover': { color: 'white' } }}
        onClick={() => {
          setMute(!mute);
        }}
      />
    ) : volume <= 75 ? (
      <VolumeDownIcon
        sx={{ color: 'lime', '&:hover': { color: 'white' } }}
        onClick={() => setMute(!mute)}
      />
    ) : (
      <VolumeUpIcon
        sx={{ color: 'lime', '&:hover': { color: 'white' } }}
        onClick={() => setMute(!mute)}
      />
    );
  }
  const toggleForward = () => {
    const currentAudioPlayer = audioPlayer.current;
    if (currentAudioPlayer) {
      currentAudioPlayer.currentTime =
        (currentAudioPlayer.currentTime ?? 0) + 10;
    }
  };
  const toggleBackward = () => {
    const currentAudioPlayer = audioPlayer.current;
    if (currentAudioPlayer) {
      currentAudioPlayer.currentTime =
        (currentAudioPlayer.currentTime ?? 0) - 10;
    }
  };
  const toggleSkipForward = () => {
    if (audioPlayer.current) {
      if (index >= playlist.length - 1) {
        // If it's the last song, go back to the first song
        setIndex(0);
        audioPlayer.current.src = playlist[0];
        audioPlayer.current.play();
      } else {
        // If it's not the last song, go to the next song
        setIndex((prevIndex) => prevIndex + 1);
        audioPlayer.current.src = playlist[index + 1];
        audioPlayer.current.play();
      }
    }
  };
  const toggleSkipBackward = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
      const currentAudioPlayer = audioPlayer.current;
      if (currentAudioPlayer) {
        currentAudioPlayer.src = playlist[index - 1] ?? '';
        currentAudioPlayer.play();
      }
    }
  };
  function formatTime(time: number) {
    if (time && !isNaN(time)) {
      const minutes =
        Math.floor(time / 60) < 10
          ? `0${Math.floor(time / 60)}`
          : Math.floor(time / 60);
      const seconds =
        Math.floor(time % 60) < 10
          ? `0${Math.floor(time % 60)}`
          : Math.floor(time % 60);

      return `${minutes}:${seconds}`;
    }
    return '00:00';
  }
  return (
    <Co>
      <Container>
        <Wrapper>
          <BarMenu theme={14}>
            <audio src={currentSong} ref={audioPlayer} />
            <CustomDiv margin={5}>
              <Box>
                <Stack>
                  <VolumeBtns />
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={volume}
                    onChange={handleVolumeChange}
                  />
                </Stack>
                <StackN>
                  <SkipPreviousIcon onClick={toggleSkipBackward} />
                  <FastRewindIcon onClick={toggleBackward} />
                  {!isPlaying ? (
                    <PlayArrowIcon
                      fontSize={'large'}
                      sx={{ color: 'lime', '&:hover': { color: 'white' } }}
                      onClick={togglePlay}
                    />
                  ) : (
                    <PauseIcon
                      fontSize={'large'}
                      sx={{ color: 'lime', '&:hover': { color: 'white' } }}
                      onClick={togglePlay}
                    />
                  )}
                  <FastForwardIcon onClick={toggleForward} />
                  <SkipNextIcon onClick={toggleSkipForward} />
                </StackN>
              </Box>
              <AfterBox>
                <MusicSlider>
                  <Typography
                    sx={{
                      color: 'lime',

                      marginRight: '14px',
                    }}
                  >
                    {formatTime(elapsed)}
                  </Typography>
                  <Slider
                    value={elapsed}
                    max={duration}
                    sx={{ color: 'white' }}
                  />
                  <Typography sx={{ color: 'lime', marginLeft: '17px' }}>
                    -{formatTime(duration - elapsed)}
                  </Typography>
                </MusicSlider>
              </AfterBox>
            </CustomDiv>
          </BarMenu>
        </Wrapper>
      </Container>
    </Co>
  );
};

export default BottomBar;
