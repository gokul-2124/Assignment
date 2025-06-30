import Navbar from './components/Navbar';
import PairHeader from './components/PairHeader';
import OrderBook from './components/OrderBook';
import ChartPanel from './components/ChartPanel';
import TradeForm from './components/TradeForm';
import MarketFeed from './components/MarketFeed';
import TopMovers from './components/TopMovers';
import OpenOrdersTable from './components/OpenOrdersTable';
import TokenChangeList from './components/TokenChangeList';
import './App.css'

function App() {
  
  return (
    <>
      <div className="bg-[#0d0d0d] text-white min-h-screen font-sans">
      <Navbar />
      <div className="grid grid-cols-12 gap-4 p-4">
        <div className="col-span-2"><OrderBook /></div>
        <div className="col-span-7 space-y-4">
          <PairHeader />
          <ChartPanel />
          <TradeForm />
          <OpenOrdersTable />
        </div>
        <div className="col-span-3 space-y-4">
          <TokenChangeList />  
          <MarketFeed />
          <TopMovers />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
