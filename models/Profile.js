const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users"
    },
    handle: {
      type: String,
      required: true
    },
    company: {
      type: String
    },
    website: {
      type: String
    },
    location: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    skills: {
      type: [String],
      required: true
    },
    bio: {
      type: String
    },
    githubUsername: {
      type: String
    },
    experience: [
      {
        title: {
          type: String,
          required: true
        },
        company: {
          type: String,
          required: true
        },
        from: {
          type: Date,
          required: true
        },
        to: {
          type: Date
        },
        current: {
          type: Boolean,
          default: false
        },
        description: {
          type: String
        }
      }
    ],
    education: [
      {
        school: {
          type: String,
          required: true
        },
        degree: {
          type: String,
          required: true
        },
        fieldOfStudy: {
          type: String,
          required: true
        },
        from: {
          type: Date,
          required: true
        },
        to: {
          type: Date
        },
        current: {
          type: Boolean,
          default: false
        },
        description: {
          type: String
        }
      }
    ],
    social: {
      youtube: {
        type: String
      },
      twitter: {
        type: String
      },
      facebook: {
        type: String
      },
      linkedin: {
        type: String
      },
      instagram: {
        type: String
      }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("profile", profileSchema);
