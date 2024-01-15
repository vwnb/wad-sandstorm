const Wad = require("web-audio-daw");
import * as React from "react";

const Sandstorm: React.FC = () => {

  const synth = new Wad({
    source: 'sawtooth',
    volume: 0.1,
  })
  
  const synth2 = new Wad({
    source: 'sawtooth',
    volume: 0.1,
    detune: -700
  })
  
  const silence = new Wad({
    source: 'sawtooth',
    volume: 0
  })

  const playNote = async (pitch: string, noteLength: number) => {
    synth.play({
      pitch: pitch,
      env: {
        decay: 0,
        hold: noteLength,
        release: 0,
        sustain: 1
      }
    })

    return synth2.play({
      pitch: pitch,
      env: {
        decay: 0,
        hold: noteLength,
        release: 0,
        sustain: 1
      }
    })
  }

  const playPause = async (noteLength: number) => {
    return silence.play({
      pitch: 'C3',
      env: {
        decay: 0,
        hold: noteLength,
        release: 0,
        sustain: 1
      }
    })
  }

  const sandstorm = async () => {
    await playNote('B4', 0.05)
    await playPause(0.05)
    await playNote('B4', 0.05)
    await playPause(0.05)
    await playNote('B4', 0.05)
    await playPause(0.05)
    await playNote('B4', 0.05)
    await playPause(0.05)
    await playNote('B4', 0.15)
    await playPause(0.05)
    await playNote('B4', 0.05)
    await playPause(0.05)
    await playNote('B4', 0.05)
    await playPause(0.05)

    await playNote('B4', 0.05)
    await playPause(0.05)
    await playNote('B4', 0.05)
    await playPause(0.05)
    await playNote('B4', 0.05)
    await playPause(0.05)
    await playNote('B4', 0.05)
    await playPause(0.05)
    await playNote('B4', 0.15)
    await playPause(0.05)
    await playNote('E5', 0.05)
    await playPause(0.05)
    await playNote('E5', 0.05)
    await playPause(0.05)

    await playNote('E5', 0.05)
    await playPause(0.05)
    await playNote('E5', 0.05)
    await playPause(0.05)
    await playNote('E5', 0.05)
    await playPause(0.05)
    await playNote('E5', 0.05)
    await playPause(0.05)
    await playNote('E5', 0.15)
    await playPause(0.05)
    await playNote('D5', 0.05)
    await playPause(0.05)
    await playNote('D5', 0.05)
    await playPause(0.05)

    await playNote('D5', 0.05)
    await playPause(0.05)
    await playNote('D5', 0.05)
    await playPause(0.05)
    await playNote('D5', 0.05)
    await playPause(0.05)
    await playNote('D5', 0.05)
    await playPause(0.05)
    await playNote('D5', 0.15)
    await playPause(0.05)
    await playNote('A4', 0.05)
    await playPause(0.05)
    await playNote('A4', 0.05)
    await playPause(0.05)

    await playNote('B4', 0.05)
    await playPause(0.05)
    await playNote('B4', 0.05)
    await playPause(0.05)
    await playNote('B4', 0.05)
    await playPause(0.05)
    await playNote('B4', 0.05)
    await playPause(0.05)
    await playNote('B4', 0.15)
    await playPause(0.05)
    await playNote('B4', 0.05)
    await playPause(0.05)
    await playNote('B4', 0.05)
    await playPause(0.05)

    await playNote('B4', 0.05)
    await playPause(0.05)
    await playNote('B4', 0.05)
    await playPause(0.05)
    await playNote('B4', 0.05)
    await playPause(0.05)
    await playNote('B4', 0.05)
    await playPause(0.05)
    await playNote('B4', 0.15)
    await playPause(0.05)
    await playNote('E5', 0.05)
    await playPause(0.05)
    await playNote('E5', 0.05)
    await playPause(0.05)

    await playNote('B4', 0.05)
    await playPause(0.05)
    await playNote('B4', 0.05)
    await playPause(0.05)
    await playNote('B4', 0.05)
    await playPause(0.05)
    await playNote('B4', 0.05)
    await playPause(0.05)
    await playNote('B4', 0.15)
    await playPause(0.05)
    await playNote('B4', 0.05)
    await playPause(0.05)
    await playNote('B4', 0.05)
    await playPause(0.05)

    await playNote('B4', 0.05)
    await playPause(0.05)
    await playNote('B4', 0.05)
    await playPause(0.05)
    await playNote('B4', 0.05)
    await playPause(0.05)
    await playNote('B4', 0.05)
    await playPause(0.05)
    await playNote('B4', 0.15)
    await playPause(0.05)
    await playNote('E5', 0.05)
    await playPause(0.05)
    await playNote('E5', 0.05)
    await playPause(0.05)
  }

  sandstorm();

  return (
    <div style={
      {
        height: '100vh',
        width: '100vw',
        textAlign: 'center',
        lineHeight: '100vh'
      }
    }>Sound on & click anywhere</div>
  )
}

export default Sandstorm