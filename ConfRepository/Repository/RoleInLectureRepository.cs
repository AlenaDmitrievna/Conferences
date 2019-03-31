﻿using System;
using System.Collections.Generic;
using System.Text;
using ConfModel.Model;
using ConfRepository.Interface;

namespace ConfRepository.Repository
{
    public class RoleInLectureRepository : BaseRepository<RoleInLecture>, IRoleInLectureRepository
    {
        public RoleInLectureRepository(ConfContext confContext) : base(confContext)
        {
        }
    }
}