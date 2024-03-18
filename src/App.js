import './styles/css/App.css';
// 
import bioimg from "./download.jpg";


function App() {
  return (
    <main className='app__wraper h-screen w-full bg-[#191923] flex items-center justify-center' dir='rtl'>
      
      <div
      className='app__content
        w-full md:max-w-md lg:max-w-6xl
        grid grid-cols-[auto,290px] h-[calc(100vh-40px)] gap-5
         '>

         
          
          {/* content */}
          <section className='bg-red-200'>
              
          </section>
           {/* biographi */}
          <aside className="bio bg-[#20202a] relative 
          ">
          {/* bio's header */}
          <footer className='bio__footer absolute 
          right-0 left-0 
          bottom-0 bg-red-100'>
            slm
          </footer>
              <header className='bio__header
               h-[235px] flex flex-col 
               items-center absolute 
               left-0 right-0  justify-center px-8'>

                <div className='bio__header-img relative mb-2'>
                  <span className='absolute w-3.5 h-3.5
                   rounded-full bg-[#ffc107]
                    bottom-0 right-0 bubble'/>

                   <img src={bioimg} className='h-20 w-20 rounded-full'/>
                </div>

                  <ul className='bio__header-detail'>
                    <li className='mb-2 text-sm text-center text-[#fafafa] '>
                      محمد مجی
                    </li>
                    <li className='mb-1 text-xs text-center text-gray-400'>
                        جونیور دولوپر
                    </li>
                    <li className='text-sm text-gray-400'>
                      توسعه دهنده فرانت
                    </li>
                  </ul>


              </header>
              {/* bio content */}
              <div className='pt-[235px] text-white px-8
               h-[calc(100vh-40px)] overflow-x-auto
                overflow-x-hidden flex flex-col'>
                    <ul className='bio__personal-details justify-between items-center mb-2'>
                        <li className='flex flex-row justify-between items-center mb-2'>
                          <span>
                          ملیت
                          </span>
                          <p>
                            ایرانی
                          </p>

                        </li>
                        <li className='flex flex-row justify-between items-center mb-2'>
                          <span>
                            شهر
                          </span>
                          <p>
                            اهواز
                          </p>

                        </li>
                        <li className='flex flex-row justify-between items-center mb-2'>
                          <span>
                            تلفن
                          </span>
                          <p>
                            09023151876
                          </p>

                        </li>
                        <li className='flex flex-row justify-between items-center mb-2'>
                          <span>
                            سن
                          </span>
                          <p>
                            17
                          </p>

                        </li>
                    </ul>
                    <span className='bio-divider w-full h-[1px] bg-[#8c8c8e] opacity-40'/>
              </div>
              
          </aside>

      </div>
    </main>
  );
}

export default App;
