const Header = ({pageTitle}) => {
  return (
    <div>
      <div style={{clear: 'both'}}></div>
      <div className='title'>
        <h1>{pageTitle}</h1>
      </div>
    </div>
  );
};

export default Header;
