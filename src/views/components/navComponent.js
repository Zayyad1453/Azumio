import React from 'react';

const NavComponent = (props) => {  
  return (
    <div className='nav-container d-block my-sm'>
      <button className="back-btn" onClick={() => props.navigateTo(props.currentTab - 1, props.questions.length)}>
        <span>BACK</span>
      </button>
      <div className='dots-container'>

        {
          props.questions.map((set, index) => {
            let isCurrentPage = index === props.currentTab;
            return (
              <div 
                className={'p-sm'}
                onClick={() => props.navigateTo(index, props.questions.length)}>
                  <span
                  className={`nav-item ${isCurrentPage && 'active'}`} 
                  >{}</span></div>
            )
              
          })
        }

      </div>
      {
        props.currentTab !== props.questions.length-1 ?
          (
            <button className="next-btn" onClick={() => props.navigateTo(props.currentTab + 1, props.questions.length)}>
              <span>NEXT</span>
            </button>
          )
          :
          (
            <button className="next-btn done-btn" onClick={() => props.submit()}>
              <span>DONE</span>
            </button>
          )


      }
    </div>
  )
}

export default NavComponent;
