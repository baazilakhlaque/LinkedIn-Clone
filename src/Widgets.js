import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    function newsArticles(heading, subtitle){
        return (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
        )

    }
  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticles('Software Engineering roles', 'Top news - 9100 readers')}
        {newsArticles('Applications of web apps', 'Top news - 8124 readers')}
        {newsArticles('Coronavirus - Pakistan Updates', 'Top news - 8093 readers')}
        {newsArticles('Tesla breaks records', 'Top news - 7410 readers')}
        {newsArticles('React and redux - making life easy', 'Top news - 6055 readers')}
        {newsArticles('Web app uses', 'Top news - 5034 readers')}
      
    </div>
  )
}

export default Widgets
