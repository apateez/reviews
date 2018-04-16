import React from 'react';
import { Button, Icon, Card, Row, Col, Modal } from 'react-materialize';
import LinesEllipsis from 'react-lines-ellipsis'

export default class Review extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
     expanded: false
   };

   this.expandDescription = this.expandDescription.bind(this);
 }

 generateStars(num) {
   num = Math.floor(num)
   var star = '★';
   var emptyStar ='☆'
   var result = '';
   for (var i = 0; i < 5; i++) {
     if (i<num) {
       result += star;
     } else {
       result += emptyStar;
       console.log(result)
     }
   }
   return result
 }

 expandDescription() {
   console.log('expanded ', this.state.expanded)
   this.setState({
     expanded: !this.state.expanded
   })
 }

 render() {
   var review = this.props.review[0]
   var stars = this.generateStars(review.rating)
   var description = `${stars}  ${review.text}`;

   let component = null
   if (!this.state.exapnded) {
     component = <LinesEllipsis
      text= {description}
      maxLine='3'
      ellipsis= '... See More'
      trimRight
      basedOn='letters'
      />
   } if (this.state.expanded) {
     component = description
   }

   return (
     <div className="review-container">
       <div className="review-profile-pic">
       <img src={review.profile_photo_url} width={70} height={70}/>
       </div>
       <div className="review-column" onClick={() => this.expandDescription()}>
         <div className="review-column-name">{review.author_name}</div>
         <div className="review-column-date">{review.relative_time_description}</div>
         <div className="review-column-text">{component}</div>
       </div>
   </div>
   )
 }
}

window.Review = Review
