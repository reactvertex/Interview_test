import styled from 'styled-components';
export const ContactPage = styled.div`
   .add_contact_btn{
       margin:  10px 0 30px 0 ;
   }
   .form_wrapper {
     min-height: 100vh;
     background-color: #F1ECC3;
   }
   .form {
       background-color: #57837B;
   }
   .avatar{
     height : 70px;
     width : 70px;
     border-radius : 50px;
     background : #FFF;
     border: 1px solid #ACB992;
     cursor: pointer;
     position: relative;
   }
   .inputFile {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    height : 70px;
    width : 70px;
    cursor: pointer;
    border-radius : 50px;
   }
   label {
        color: #C9D8B6;
   }
   .actionBtn{
     background-color: #F1E0AC;
     color: #395B64;
   }
`;

export const FormNavbar = styled.div`
 .form_Navbar {
  background-color : #57837B;
  width : 100%;
  position : fixed;
  padding : 5px 0px 5px 40px;
  }
`;