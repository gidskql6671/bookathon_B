const Team = require("../../models/team");

const createTeam = async (req, res, next) => {
    try{
        await Team.create({...req.body});
        await res.status(201).json({
            code: '2001',
            status: '성공 : Team 생성',
            message: 'Team이 정상적으로 생성되었습니다.'
        });
    }
    catch(err){
        console.error(err);
        await res.status(500).json({
            code: '5000',
            status: '에러 : 서버 에러',
            message : '요청 처리 중 서버에서 문제가 발생했습니다.'
        });
    }
};


const deleteTeam = async (req, res, next) => {

};

const updateTeam = async (req, res, next) => {

};

const searchTeams = async (req, res, next) => {

};