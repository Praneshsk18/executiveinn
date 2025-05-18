import styled from 'styled-components';
export const StyledWrapper = styled.div`
  .btn {
    border: none;
    padding: 1em 1.5em;
    color: #7b3306;
    position: relative;
    transition: 0.5s ease;
    cursor: pointer;
    border-bottom: 2px solid #7b3306;
  }

  .btn::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 0;
    background-color: #fffbeb;
    transition: 0.5s ease;
  }

  .btn:hover {
    color: #fffbeb;
    transition-delay: 0.5s;
  }

  .btn:hover::before {
    width: 100%;
  }

  .btn::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0;
    width: 100%;
    background-color: #7b3306;
    transition: 0.4s ease;
    z-index: -1;
  }

  .btn:hover::after {
    height: 100%;
    transition-delay: 0.4s;
    color: aliceblue;
  }
`;