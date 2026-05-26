from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Employee, Attendance, Leave

router = APIRouter()


@router.get("/")
def dashboard(db: Session = Depends(get_db)):

    total_employees = db.query(Employee).count()
    total_attendance = db.query(Attendance).count()
    total_leaves = db.query(Leave).count()

    return {
        "employees": total_employees,
        "attendance": total_attendance,
        "leaves": total_leaves
    }