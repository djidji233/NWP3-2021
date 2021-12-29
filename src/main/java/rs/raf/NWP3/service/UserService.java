package rs.raf.NWP3.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import rs.raf.NWP3.model.User;
import rs.raf.NWP3.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IService<User,Long>, UserDetailsService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public <S extends User> S save(S var1) {
        return userRepository.save(var1);
    }

    @Override
    public Optional<User> findById(Long var1) {
        return userRepository.findById(var1);
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public void deleteById(Long var1) {
        userRepository.deleteById(var1);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User myUser = this.userRepository.findByEmail(email);
        if(myUser == null) {
            throw new UsernameNotFoundException("User email "+email+" not found");
        }

        return new org.springframework.security.core.userdetails.User(myUser.getEmail(), myUser.getPassword(), new ArrayList<>());

    }
}
