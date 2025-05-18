import styled from 'styled-components';

const StyledWrapper2 = styled.div`
  .btn {
    display: inline-block;
    padding: 0.42rem 1.8rem;
    font-size: 16px;
    font-weight: 600;
    color: #fffbeb;
    border: 2px solid #fffbeb;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    overflow: hidden;
    z-index: 1;
    font-family: inherit;
    transition: all 0.3s ease;
  }

  .btn::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fffbeb;
    transform: translateX(-100%);
    transition: all 0.3s ease;
    z-index: -1;
  }

  .btn:hover {
    color: #7a3306;

  }

  .btn:hover::before {
    transform: translateX(0);
  }
`;
export default StyledWrapper2;
