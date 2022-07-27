package Students.Admission.Details;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class StudentService {
	private static Map<Long, Student> students=new HashMap<>();
	private static Long Index=4L;
	
	static
	{
		Student student1=new Student(1L,"Arun","CSE",9987654863L);
		Student student2=new Student(2L,"Mekha","CE",9786543222L);
		Student student3=new Student(3L,"Mukil","MECH",9987453263L);
		Student student4=new Student(4L,"Bhavya","ECE",9987987363L);
		
		students.put(1L, student1);
		students.put(2L, student2);
		students.put(3L, student3);
		students.put(4L, student4);
		
		
		
	}

	public static List<Student> getAllStudents() {
		return new ArrayList<>(students.values());
	}

	public static Student getStudentDetails(Long studentId) {
		return students.get(studentId);
	}

	public static Student addStudent(Student student) {
		Index+=1;
		student.setId(Index);
		students.put(Index, student);
		return student;
	}

	public static Student updateStudent(Long studentId, Student student) {
		student.setId(studentId);
		students.put(studentId, student);
		return student;
	}

	public static Student deleteStudent(Long studentId) {
		return students.remove(studentId);
	}

}
