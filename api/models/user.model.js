const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["learner", "instructor"],
    default: "learner",
  },
  profilePicture: {
    type: String,
    default: "",
  },
  enrolledCourses: [
    {
      courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        // required: true,
      },
      enrollmentDate: {
        type: Date,
        default: Date.now,
      },
      progress: {
        type: Number,
        default: 0,
      },
      completionStatus: {
        type: String,
        enum: ["in-progress", "completed"],
        default: "in-progress",
      },
      certificate: {
        type: String,
        default: "",
      },
    },
  ],
  //   quizzes: [
  //     {
  //       quizId: {
  //         type: mongoose.Schema.Types.ObjectId,
  //         ref: "Quiz",
  //         required: true,
  //       },
  //       score: {
  //         type: Number,
  //         default: 0,
  //       },
  //       attempts: {
  //         type: Number,
  //         default: 0,
  //       },
  //     },
  //   ],
  assignments: [
    {
      assignmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Assignment",
        required: true,
      },
      submissionUrl: {
        type: String,
        default: "",
      },
      score: {
        type: Number,
        default: 0,
      },
      feedback: {
        type: String,
        default: "",
      },
    },
  ],
  notifications: [
    {
      message: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
      read: {
        type: Boolean,
        default: false,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
