import React from 'react';
import {Divider} from 'antd';
import styles from './Separator.module.css'

function Separator() {
    return <Divider className={styles.separator}>OR</Divider>;
}

export default Separator;
