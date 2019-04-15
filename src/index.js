// needed only once for entire library

// eslint-disable-next-line
import fontawesome from '@fortawesome/fontawesome';

// eslint-disable-next-line
import fontawesomeFreeSolid from '@fortawesome/fontawesome-free-solid';

import ActionFeedback from './components/ActionFeedback';
import Area from './components/Area';
import Badge from './components/Badge';
import Button from './components/Button';
import Collapsible from './components/Collapsible';
import Form from './components/Form';
import Hint from './components/Hint';
import Image from './components/Image';
import Link from './components/Link';
import Margin from './components/Margin';
import Navbar from './components/Navbar';
import Padding from './components/Padding';
import Modal from './components/Modal';
import Popup from './components/Popup';
import Table from './components/Table';
import Theme from './components/Theme';
import Tooltip from './components/Tooltip';
import Icon from './components/Icon';
import CircularLoader from './components/CircularLoader';
import Paginator from './components/Paginator';
import Tabs from './components/Tabs';

import injectDefaultStyles from './config/defaultStyles';
import injectDefaultTyphography from './config/defaultTyphography';

import defaultTheme from './config/defaultTheme';

injectDefaultStyles();
injectDefaultTyphography();

export {
  ActionFeedback,
  Area,
  Badge,
  Button,
  Collapsible,
  Form,
  Hint,
  Image,
  Link,
  Margin,
  Modal,
  Navbar,
  Padding,
  Popup,
  Table,
  Theme,
  Tooltip,
  Icon,
  CircularLoader,
  defaultTheme,
  Paginator,
  Tabs
}
