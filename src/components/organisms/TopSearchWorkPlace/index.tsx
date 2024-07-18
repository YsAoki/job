import React, { FC } from 'react'
import Container from '../../atoms/Container'
import SectionTitle from '../../molcules/SectionTitle'
import { LocationInfo } from '../../../types/apiJobs';
import TopSearchWorkPlacePaper from '../TopSearchWorkPlacePaper';

type TopSearchWorkPlace = {
  locations?: LocationInfo[];
}

type Props = TopSearchWorkPlace

const TopSearchWorkPlace:FC<Props> = ({locations}) => {
  return (
    <Container>
      <SectionTitle>勤務地から探す</SectionTitle>
      <TopSearchWorkPlacePaper locations={locations}/>
    </Container>
  )
}

export default TopSearchWorkPlace