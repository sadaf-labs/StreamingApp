import React, { useState, useEffect, useRef } from 'react';
import { Nav } from 'react-bootstrap';
import './side-bar.scss';
import { COMPANY_LOGO_URL } from '../../utils/constant';

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleSidebarClick = () => {
    setIsExpanded(prevState => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      className={`sidebar ${isExpanded ? 'expanded' : ''}`}
      ref={sidebarRef}
      onClick={handleSidebarClick}
    >
      <div className="sidebar-header">
        <img src={COMPANY_LOGO_URL} alt="logo" className="sidebar-logo" />
      </div>
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link href="#" className="sidebar-item">
            <div className="row">
              <i className="col-md-1 fas fa-home "></i>
              {isExpanded && <span className="col-md-1">My Space</span>}
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="sidebar-item">
            <div className="row">
              <i className="col-md-1 fas fa-film"></i>
              {isExpanded && <span className="col-md-1">Search</span>}
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="sidebar-item">
            <div className="row">
              <i className="col-md-1 fas fa-user"></i>
              {isExpanded && <span className="col-md-1">Home</span>}
            </div>

          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="sidebar-item">
            <div className="row">
              <i className="col-md-1 fas fa-tv"></i>
              {isExpanded && <span className="col-md-1">TV</span>}
            </div>

          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="sidebar-item">
            <div className="row">
              <i className="col-md-1 fas fa-film"></i>
              {isExpanded && <span className="col-md-1">Movies</span>}
            </div>

          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="sidebar-item">
            <div className="row">
              <i className="col-md-1 fas fa-football"></i>
              {isExpanded && <span className="col-md-1">Sports</span>}
            </div>

          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Sidebar;
