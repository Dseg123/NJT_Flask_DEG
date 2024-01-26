import React, { memo, ReactNode, CSSProperties } from 'react';

import { Transition } from 'semantic-ui-react';
import styled from 'styled-components';

import { ReactComponent as CollapseDoubleArrow } from '../../assets/collapse_double_arrow_icon.svg';
import { ReactComponent as CopyIcon } from '../../assets/copy_icon.svg';
import { ReactComponent as InformationIcon } from '../../assets/information_icon.svg';

interface SlidingPanelProps {
  visible: boolean;
  animation?: string;
  onCollapse?: () => void;
  style?: CSSProperties;
  children?: ReactNode;
}

/**
 * A panel that slides from a side of the screen into view.
 */
const SlidingPanel: React.FC<SlidingPanelProps> = ({
  visible,
  animation = 'fade left',
  onCollapse,
  style,
  children,
  ...rest
}) => {
  return (
    <>
      {visible && (
        <div style={{ zIndex: 1000, position: 'absolute', height: '100%', width: '100%' }}>
          <Transition animation={animation} duration={300}>
            <Panel style={style}>
              <PanelHeader>
                <span />
                <PanelControls>
                  <CollapseDoubleArrow onClick={onCollapse} style={{ marginRight: 'auto' }} />
                  <CopyIcon />
                  <InformationIcon />
                </PanelControls>
                <span style={{ width: '100%', height: '1px', background: '#c0c0c0' }} />
              </PanelHeader>
              {children}
            </Panel>
          </Transition>
        </div>
      )}
    </>
  );
};

const Panel = styled.div`
  z-index: 1000;

  display: flex;
  flex-direction: column;
  position: relative;

  height: calc(100% - 8px);
  width: clamp(210px, 18vw, 320px);
  margin-top: 4px;
  margin-left: auto;
  margin-right: 4px;
  padding: 1.2rem !important;
  padding-top: 0 !important;
  border: 1px solid #c0c0c0 !important;
  border-radius: 12px !important;
  background: white;
`;

const PanelHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 4.2rem;
  background: white;
`;

const PanelControls = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;

  & > svg {
    border-radius: 6px;
    filter: invert(52%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(90%) contrast(84%);
    cursor: pointer;

    &:hover {
      outline: 1px solid rgba(0, 0, 0, 0.4);
      background: rgba(0, 0, 0, 0.04);
    }
  }
`;

SlidingPanel.displayName = 'SlidingPanel';

export default memo(SlidingPanel);
