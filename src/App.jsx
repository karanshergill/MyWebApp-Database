import InsertLabelForm from './components/InsertForm.jsx';
import { Separator } from "@/components/ui/separator"
import './App.css';

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
    <div className='flex justify-center p-8 bg-black text-white h-screen'>
      <main className='w-5/6'>
        <h1 className='text-3xl font-display font-semibold text-center'>DBMS Dashboard</h1>
        <div className='my-4'>
        <Separator/>
        </div>
        <div className='flex flex-col'>
          <h3 className='text-lg font-display'>Create Record</h3>
          <InsertLabelForm onSubmit={handleFormSubmit} />
        </div>
      </main>
    </div>
  );
};

export default App;
