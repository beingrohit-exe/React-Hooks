import React, { useLayoutEffect } from 'react';
import './App.css'

const App = () => {

  const [description, setDescription] = React.useState('');
  const [pollOptions, setPollOptions] = React.useState([]);
  const [newPollOption, setNewPollOption] = React.useState('');

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAddOption = () => {
    if (newPollOption.trim() && pollOptions.length < 5) {
      const newOption = {
        id: Math.random().toString(36).substring(2, 15),
        option: newPollOption,
        votes: 0
      };
      setPollOptions([...pollOptions, newOption]);
      setNewPollOption('');
    } else {
      console.error('Option data cannot be empty or you cannot add more than 5 option');
    }
  }

  React.useEffect(() => {
    console.warn(pollOptions);
  }, [pollOptions])

  return (
    <main className='main'>
      <section>
        <h1>
          Polling Application
        </h1>
        {pollOptions.length < 5 && (
          <div className='add-div'>
            <input
              type='text'
              placeholder='Option'
              value={newPollOption}
              onChange={(event) => setNewPollOption(event.target.value)}
            />
            <button onClick={handleAddOption}>
              Add Option
            </button>
          </div>
        )}

        {pollOptions.length > 0 && (
          <ul className='ul-main'>
            {pollOptions.map((item) => (
              <>
                <li key={item.id}>
                  <span>{item.option}</span>
                  <strong>{`Votes : ${item.votes}`}</strong>
                </li>
                <div>
                  <button>
                    Edit
                  </button>
                  <button>
                    Delete
                  </button>
                  <button>
                    Vote
                  </button>
                </div>
              </>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}

export default App;