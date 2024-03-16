import './App.css';
// 
import bioimg from "./download.jpg";


function App() {
  return (
    <main className='app__wraper h-screen w-full bg-[#191923] flex items-center justify-center'>
      
      <div
      className='app__content
        w-full md:max-w-md lg:max-w-6xl
        grid grid-cols-[290px,auto] h-[calc(100vh-40px)] gap-5
         '>

          {/* biographi */}
          <aside className="bio bg-[#20202a] 
          ">
              <header className='bio__header h-[235px] flex flex-col items-center justify-center'>
                <div className='bio__header-img relative mb-2'>
                  <span className='absolute w-3.5 h-3.5
                   rounded-full bg-[#ffc107]
                    bottom-0 right-0 bubble'/>

                   <img src={bioimg} className='h-20 w-20 rounded-full'/>
                </div>

                  <ul className='bio__header-detail'>
                    <li className='mb-2 text-sm text-[#fafafa] '>
                      محمد مجی
                    </li>
                    <li className='mb-1 text-xs text-gray-400'>
                        جونیور دولوپر
                    </li>
                    <li className='text-sm text-gray-400'>
                      توسعه دهنده فرانت
                    </li>
                  </ul>


              </header>
              
          </aside>

          {/* content */}
          <section className='bg-red-200'>
              
          </section>
      </div>
    </main>
  );
}

export default App;
