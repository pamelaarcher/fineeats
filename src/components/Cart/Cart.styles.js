import styled from 'styled-components'
import { Button, Card, CardBody} from "reactstrap";

export const StyledCart=styled.div`
 position: fixed;
 width: 400px;
 top: 60px;
 right: 10px;
 
 /* inset: 60px auto auto auto; */
 visibility: visible;
 opacity: 1;
 transform: translateY(0);
 border: none;
 border-radius: 12px;
 margin-top: 8px;
 box-shadow: 0 0 0 1px rgb(67 41 163 / 20%), 0 1px 12px 0 rgb(67 41 163 / 20%);
 z-index: 1040;
 background: var(--bs-secondary);
 transition: .25s ease-out;
 transition-property: opacity,transform,visibility;

 &:before {
    content: "";
    position: absolute;
    top: -6px;
    right: 2.9em;
    z-index: -1;
    width: 14px;
    height: 14px;
    transform: rotate(45deg);
    background: rgb(248, 247, 242);
    box-shadow: rgb(61 90 113 / 40%) -4px -4px 4px;
}

h1 {
  color: var(--bs-primary);
  margin-bottom: 20px;
}

h3 {
  color: var(--bs-primary);
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  text-align: center;
}

h4 {
  color: var(--bs-primary);
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 20px;
  text-align: center;
}
h5 {
  color: var(--bs-primary);
  margin-bottom: 20px;
}
`;
export const StyledCard=styled(Card)`
  background: var(--bs-secondary);
  border-radius: 12px;
  border-radius: 0;
  margin-top: 0;
  border-radius: 12px;
`;

export const StyledCardBody=styled(CardBody)`
  background: var(--bs-secondary);
  border-radius: 0px 0px 12px 12px;
`;
export const StyledItem=styled.div`
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 15px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
  border: thin solid;
  border-color: var(--bs-secondary);
  border-bottom-color: var(--bs-accent-2);
`;
export const OrderButton=styled(Button)`
  position: absolute;
  top: 5px;
  right: 0px;
  /* display: block; */
  background: linear-gradient(0deg, rgba(192,145,26,1) 0%, rgba(255,182,0,1) 100%);
  width: 80px;
  height: 35px;
  color: #fff;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 16px;
  padding: 0px;
  cursor: pointer;
  transition: all 0.3s ease;

  
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  border-color: rgba(108,117,125,.1);

&:hover {
  background: linear-gradient(0deg, rgba(79,110,118,1) 0%, rgba(96,145,158,1) 100%);
}
`;

const ItemButton=styled(Button) `
    position: absolute;
    top: 0;
    right: 60px;
    width: 40px;
    height: auto;
    padding: 0;
    margin: 0;
    background: linear-gradient(0deg, rgba(79,110,118,1) 0%, rgba(96,145,158,1) 100%);
    color: #fff;
    line-height: 1em;
    border-radius: 5px;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 20px;
    padding: 0px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: block;
    box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
    7px 7px 20px 0px rgba(0,0,0,.1),
    4px 4px 5px 0px rgba(0,0,0,.1);
    border-color: rgba(108,117,125,.1);

    &:hover {
      background: linear-gradient(0deg, rgba(192,145,26,1) 0%, rgba(255,182,0,1) 100%);
    }
`;


export const AddItemButton=styled(ItemButton) `
    right: 70px;
`;
export const RemoveItemButton=styled(ItemButton) `
    right: 20px;
`;

export const StyledTotal=styled.div`
  position: relative;
`;

export const CancelButton=styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
  background: linear-gradient(0deg, rgba(79,110,118,1) 0%, rgba(96,145,158,1) 100%);
  width: 50px;
  height: 35px;
  color: #fff;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 24px;
  padding: 0px;
  cursor: pointer;
  transition: all 0.3s ease;

  
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  border-color: rgba(108,117,125,.1);

&:hover {
  background: linear-gradient(0deg, rgba(192,145,26,1) 0%, rgba(255,182,0,1) 100%);
}
`;