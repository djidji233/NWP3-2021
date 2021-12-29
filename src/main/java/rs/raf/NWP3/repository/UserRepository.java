package rs.raf.NWP3.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.raf.NWP3.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    public User findByEmail(String email);
}
