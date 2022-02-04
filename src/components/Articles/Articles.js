import React from "react";
import styled from "styled-components";

const Content = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  font-family: 'Poppins';

   
  .workBox {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	padding: 30px;
	margin-top: 40px;
	border-radius: 15px;
	-webkit-box-shadow: 0px 14px 28px rgba(134, 151, 168, 0.08);
	box-shadow: 0px 14px 28px rgba(134, 151, 168, 0.08);
	-webkit-transition: all 0.3s ease-in;
	transition: all 0.3s ease-in;
	border: 1px solid #eee;

  @media (max-width: 800px){
    display: inherit;
    margin-left: 15px;
    margin-right: 15px;
  }
  }


  
  .workBox:first-child {
	margin-top: 0;
  }
  
  .workBox .workImageContainer {
	-webkit-box-flex: 0;
    -ms-flex: 0 0 350px;
    flex: 0 0 350px;
	border-radius: 10px;
	height: auto;
  }
  
  .workBox .workImageContainer img {
	width: 100%;
  height: 100%;
  object-fit:cover;
	border-radius: 10px;
	border: 1px solid #ddd;
  }
  
  .workBox .workDescribeContainer {
	-webkit-box-flex: 0;
    -ms-flex: 0 1 calc(100% - 350px);
    flex: 0 1 calc(100% - 350px);
	margin-left: 25px;
  }
  
  .workBox .workDescribeContainer h3 {
	letter-spacing: 1px;
  }
  
  .workBox .workDescribeContainer ul {
	list-style: disc inside;
	font-size: 0.9rem;
	line-height: 1.3;
	letter-spacing: 1px;
	margin-top: 20px;
  }
  
  .workBox .workDescribeContainer ul li:not(:first-child) {
	margin-top: 10px;
  }
  
  .workBox .workDescribeContainer p {
	font-size: 0.9rem;
	margin-top: 20px;
  }
  
  .workBox .workDescribeContainer h4 {
	font-size: 1rem;
	margin-top: 7px;
	letter-spacing: 1px;
	line-height: 1.2;
  }
  
  .workBox .workDescribeContainer h4 span {
	display: inline-block;
	padding: 0 5px;
  }
  
  .workBox .workDescribeContainer .workLinks {
	margin-top: 50px;
  }
  
  .workBox .workDescribeContainer .workLinks a {
	font-size: 1.1rem;
	margin-right: 20px;
	display: inline-block;
	text-decoration: underline;
  }
  
  .workBox .workDescribeContainer .workLinks a:focus {
	border: 2px solid #006fc6;
  }

`;

const Articles = () => {

    return(
        <Content>
            <article class="workBox">
                <div class="workImageContainer">
                    <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80" alt="baitstick Fishing product website" />
                </div>
                <div class="workDescribeContainer">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel massa eget massa congue lacinia. Ut non lectus at nunc rhoncus vehicula vel et felis. Quisque ac rhoncus urna, vel sollicitudin urna. Cras tempor nulla erat, sit amet tincidunt odio venenatis sed. In mi tortor, ultrices ut dui in, mattis convallis ligula. Vivamus elementum magna at metus dapibus fermentum. Sed ornare erat id tortor facilisis facilisis. Phasellus sed iaculis neque. Nam ac lectus ac velit auctor accumsan eget et eros.
                    </p>
                </div>
            </article>
            <article class="workBox">
                <div class="workImageContainer">
                    <img src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="baitstick Fishing product website" />
                </div>
                <div class="workDescribeContainer">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel massa eget massa congue lacinia. Ut non lectus at nunc rhoncus vehicula vel et felis. Quisque ac rhoncus urna, vel sollicitudin urna. Cras tempor nulla erat, sit amet tincidunt odio venenatis sed. In mi tortor, ultrices ut dui in, mattis convallis ligula. Vivamus elementum magna at metus dapibus fermentum. Sed ornare erat id tortor facilisis facilisis. Phasellus sed iaculis neque. Nam ac lectus ac velit auctor accumsan eget et eros.
                    </p>
                </div>
            </article>
        </Content>
    );
}

export default Articles;