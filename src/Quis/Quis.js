import React, { Component } from 'react'
import './Quis.css'
export default class Quis extends Component {
    constructor(props){
        super(props)
        this.state={
            questions:[
                {
                    questionText:'What is the largest Iranian export after petroleum products?',
                    answer:[
                        {answerText:'Carpets',iscorrect:false},
                        {answerText:'Iron',iscorrect:true},
                        {answerText:'cats',iscorrect:false},
                        {answerText:'beer',iscorrect:false},
                    ],

                },
                {
                    questionText:'what is the capital of france?',
                    answer:[
                        {answerText:'lyon',iscorrect:false},
                        {answerText:'lille',iscorrect:false},
                        {answerText:'Strasbourg',iscorrect:false},
                        {answerText:'paris',iscorrect:true},
                    ]
                },
                {
                    questionText:'who was the nader shah?',
                    answer:[
                        {answerText:'poet',iscorrect:false},
                        {answerText:'author',iscorrect:false},
                        {answerText:'king',iscorrect:true},
                        {answerText:'director',iscorrect:false},
                    ]
                },
                {
                    questionText:'which car brand is german?',
                    answer:[
                        {answerText:'Volkswagen',iscorrect:true},
                        {answerText:'ford',iscorrect:false},
                        {answerText:'lamborghiny',iscorrect:false},
                        {answerText:'toyota',iscorrect:false},
                    ]
                }
            ],
            currentQuis:0,
            correctAnswer:0,
            flg:0
        }
    }
    clickHandler(answer){
        // console.log(answer.iscorrect);
        this.setState({
            flg:this.state.flg+1
            
        })
        this.state.currentQuis < 3 &&this.setState({
            currentQuis: this.state.currentQuis+1,
        });
        answer.iscorrect&&this.setState({
            correctAnswer: this.state.correctAnswer+1,
        })
       
    }
  render() {
    if(this.state.flg<4){
    return (
      <div>
        <div className='question-box'>
            <div className='question'>
              <p>
                {this.state.questions[this.state.currentQuis].questionText}
              </p>
            </div>
            <div className='answers'>
                {this.state.questions[this.state.currentQuis].answer.map((answer)=>{
                    return <div className='answer-container'>
                        <a href='#' className='answer-item' onClick={()=>{this.clickHandler(answer)}}>{answer.answerText}</a>
                        </div>
                })}
            </div>
        </div>
      </div>
    )
  }
return (
    <div className='scored'>
        <p>you scored {this.state.correctAnswer} out of 4</p>
    </div>
)
}
}
