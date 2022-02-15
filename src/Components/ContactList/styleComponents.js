import styled from 'styled-components';

export const TableContent = styled.div`
   .table  {
    border: 1px solid #515E63;
    border-radius: 5px;
    .thead-dark{
        background-color:  #57837B;
        color: #FFF;
    }
   }
`;


export const ContactPage = styled.div`
   padding:  20px 30px;
   background-color:  #F1ECC3;
   min-height:  100vh;
   .add_contact_btn{
       margin:  10px 0 30px 0 ;
       background-color : #57837B;
       color : #FFF;
   }
   .text_name{
       color : #57837B;
       font-weight : bold;
       font-size : 30px;
   }
   .action_button{
       cursor : pointer;
   }
`;