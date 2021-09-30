import styled from "styled-components";


export const TitleH3 = styled.h3`
  font-size: 1.9em;
  color: #2F4F4F;
  margin-top: 20px;
  margin-bottom: 30px;
`;



export const Frm = styled.form`
    width: 400px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    
`;

export const BtnCreate = styled.button`
margin-top: 10px;
font-size: 1em;
width: 250px;
background-color: #fff;
color: #198754;
border: 1px solid #198754;
border-radius: 4px;
:hover{
    background-color: #198754;
    color: #fff;
}
`;

export const BtnListar = styled.button`
margin-top: 10px;
font-size: 1em;
width: 250px;
background-color: #fff;
color: #198754;
border: 1px solid #198754;
border-radius: 4px;
:hover{
    background-color: #198754;
    color: #fff;
}
`;

export const InpFrmCreate = styled.input`
margin-bottom: 10px;
font-size: 1em;
width: 250px;
height: 30px;
color: #363636;
padding-left: 5px;
`;

export const InpFrmCreateName = styled.input`
margin-bottom: 10px;
font-size: 1em;
width: 380px;
height: 30px;
color: #363636;
padding-left: 5px;
`;

export const BtnPgListar = styled.button`
/* margin-top: 10px; */
margin: 0 05px;
font-size: 1em;
width: 100px;
background-color: #fff;
color: #198754;
border: 1px solid #198754;
border-radius: 4px;
:hover{
    background-color: #198754;
    color: #fff;
}
`;

export const TblPgListar = styled.table`
  margin-top: 15px;
  width: 100%;
  overflow: hidden;
  /* box-shadow: 0 0 05px rgba(0, 0, 0, 015); */
   
  
  th{    
    background-color: #009879;
    color: #f1f1f1;
    padding: 3px;
    
  }
  td{
    color: #3e3e3e;
    padding: 08px 08px;
    border-bottom: solid 1px #dddddd;
    font-size: 12px;
  }

  th:first-of-type{
    border-radius: 05px 0px 0 0px;
  }
  th:last-of-type{
    border-radius: 0px 5px 0 0px;
  }

  tr:nth-of-type(even){
    background-color: #f3f3f3;
  }

  tr:last-of-type{
    border-bottom: solid 2px #009879;;
   }

`;

export const LogoImg = styled.img`
    width: 250px;
        
`;

export const SelectFrmCreate = styled.select`
margin-bottom: 10px;
font-size: 1em;
width: 250px;
height: 30px;
color: #363636;

`;