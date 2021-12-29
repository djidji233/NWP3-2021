package rs.raf.NWP3.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name", length = 32)
    private String firstName;

    @Column(name = "last_name", length = 32)
    private String lastName;

    @Column(unique = true)
    private String email;

    @Column
    private String password;


    @OneToMany(mappedBy = "user", cascade = CascadeType.MERGE)
    @JsonIgnore
    private List<Permission> permissions;

}
