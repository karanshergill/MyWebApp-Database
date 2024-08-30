import InsertLabelForm from './components/InsertForm.jsx';

const App = () => {
  const handleFormSubmit = async (data) => {
    try {
      const response = await fetch('https://fuzzlists-api.karanshergill.workers.dev/api/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Record inserted successfully');
      } else {
        alert('Error inserting record');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error inserting record');
    }
  };

  return (
    <div className='bg-black text-white h-screen'>
      <h1>Insert Label</h1>
      <InsertLabelForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
